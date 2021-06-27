/**
 *  Método responsável pelo cálculo de desconto do imposto de renda
 * @param {String} salary
 * @param {String} pensionDiscount
 * @param {Number} dependentsQuantity
 * @returns Desconto do IR
 */
export const getCalculatedIR = ({
    salary,
    pensionDiscount,
    dependentsQuantity,
}) => {
    let aliquot = 1;
    let deduce = 0;
    const dependentsDeduce = 164.56;

    switch (true) {
        case salary >= '1903.99' && salary <= '2826.65':
            aliquot = 7.5 / 100;
            deduce = '142.80';
            break;
        case salary >= '2826.66' && salary <= '3751.05':
            aliquot = 15 / 100;
            deduce = '354.80';
            break;
        case salary >= '3751.06' && salary <= '4664.68':
            aliquot = 22.5 / 100;
            deduce = '636.13';
            break;
        case salary >= '4.664,68':
            aliquot = 27.5 / 100;
            deduce = '869.36';
            break;
        default:
            aliquot;
            deduce;
            break;
    }

    const calculatedDependentsDeduce = dependentsDeduce * dependentsQuantity;
    const baseSalaryIR = salary - pensionDiscount - calculatedDependentsDeduce;
    return baseSalaryIR * aliquot - deduce;
};
