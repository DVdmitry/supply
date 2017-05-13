export class Company{
    name: string;
    data: string;
    logo: string;
    stuff: string[];
    brand: string[];
}

export const COMPANIES: Company[] = [
{name : "Территория Инструмента", data : "тел.017-3-333-333", logo: "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/company/ti.png", stuff : ["Малярный инструмент", "Измерительные инструменты"], brand : ["https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/gross.png", "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/matrix.png"]},
{name : "EKT", data : "тел.017-5-555-555", logo: "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/company/ekt.JPG", stuff : ["Малярный инструмент", "Пневмоинструменты"], brand : ["https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/bosch.JPG", "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/matrix.png"]},
{name : "ИнструментКомплект", data : "тел.017-4-444-444", logo: "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/company/ik.png", stuff : ["Электроинструмент", "Пневмоинструменты"], brand : ["https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/Elfe.png", "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/Palisad.png"]},
]
