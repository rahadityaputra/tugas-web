export const cekKarakter = (value) => {
    if (value.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  
export const cekAngka = (value) => {
    if (Number(value)) {
      return true;
    } else {
      return false;
    }
}
  

