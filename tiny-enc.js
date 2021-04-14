(() => {
  const subtle = crypto.subtle;
  const te = new TextEncoder();
  const ua = ab => new Uint8Array(ab);
  const alg = { name: "AES-CBC" };
  const fcc = x => String.fromCharCode(x);
  const base642ab = b => ua(atob(b).split('').map(c => c.charCodeAt(0)));
  const getKey = async pass =>
    await subtle.importKey(
      "raw",
       te.encode((pass.padStart(16, '0').slice(0, 16))),
      alg,
      false,
      ["encrypt", "decrypt"]
    );
  window.tinyEnc = {
    encrypt: async (pass, msg) => {
      const iv = crypto.getRandomValues(ua(16));
      return btoa([...ua(iv), ...ua(await subtle.encrypt(
        { ...alg, iv },
        await getKey(pass),
        te.encode(msg)
      ))].reduce((data, byte) => data + fcc(byte), ''));
    },
    decrypt: async (pass, msg) => {
      return [...ua(await subtle.decrypt(
        { ...alg, iv: base642ab(msg).slice(0, 16) },
        await getKey(pass),
        base642ab(msg).slice(16)
      ))].map(x => fcc(x)).join('');
    }
  }
})();