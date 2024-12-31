//------------------------------
//---Format Number
//------------------------------
export function FormatNumber(number: any, min=4) {
    const result = new Intl.NumberFormat("en-us", {
        minimumFractionDigits: min,
        maximumFractionDigits: min
    }).format(number)
    return result
}
  
