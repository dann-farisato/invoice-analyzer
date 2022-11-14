export const detectProducts = function (str: string): string[] {
    const lines = str.split('\n');
    const indexOfDescription = lines.findIndex((el: string) => el.match(/^Description/));
    const indexOfSubtotal = lines.findIndex((el: string) => el.match(/^Subtotal/));
    const arrayOfProducts = lines.slice(indexOfDescription + 1, indexOfSubtotal);
    const res: string[] = [];
    arrayOfProducts.forEach((product: string) => {
        const details = product.split(' ');
        const indexOfFirstnumber = details.findIndex((el: string) => el.match(/^[0-9]+$/));
        if (indexOfFirstnumber >= 0) {
            res.push(details.slice(0, indexOfFirstnumber).join(' '));
        } else if (indexOfFirstnumber == -1) {
            res[res.length - 1] += ' ' + details.join(' ')
        }
    })
    return res;
}