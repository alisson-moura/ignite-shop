export const formatNumberToCurrency = (value: number): string => new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(value / 100)