import { AzureFunction, Context, HttpRequest } from "@azure/functions"

let map = new Map()
    .set(0, "נ")
    .set(1, "ג")
    .set(2, "ה")
    .set(3, "ש");

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('Spinning the Dreidel.....');

    var randomValue = Math.floor(Math.random() * Math.floor(3));

    context.res = {
        status: 200,
        body: map.get(randomValue)
    };
    
    context.done();
};

export default httpTrigger;
