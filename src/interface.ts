type CoreCount = 2 | 4 | 8;
type CoreName = "dual core" | "octa core";

type Core = CoreCount | CoreName;

interface IProcessor {
    brand: string;
    baseModel: string;
    modelName: string;
    coreTotal: Core;
    clockSpeed: number;
    
}

interface Intel extends IProcessor {
    turboBoost: boolean;
}
interface AMD extends IProcessor {
    precisionBoost?: boolean;
}


function createIntel(processor: Intel): void {
    console.log(`
    ================================================
    Terima kasih ${processor.brand}, anda telah berhasil membuat processor dengan detail berikut: 
    
    nama base model : ${processor.baseModel}
    nama model : ${processor.modelName}
    kecepatan clock speed  : ${processor.clockSpeed}
    total core : ${processor.coreTotal}

    =================================================
    `);
}
function createAMD(processor: AMD): void {
    console.log(`
    ================================================
    Terima kasih ${processor.brand}, anda telah berhasil membuat processor dengan detail berikut: 
    
    nama base model : ${processor.baseModel}
    nama model : ${processor.modelName}
    kecepatan clock speed  : ${processor.clockSpeed}
    total core : ${processor.coreTotal}
    precision boost enable : ${processor.precisionBoost ? processor.precisionBoost : "tidak ada"}

    =================================================
    `);
}

const corei5: Intel = {
    brand: 'intel',
    baseModel: 'core i5',
    modelName: 'i5-11310f',
    clockSpeed: 4,
    coreTotal: 2,
    turboBoost: false
};
const ryzen3: AMD = {
    brand: 'amd',
    baseModel: 'ryzen 3',
    modelName: 'r-5570x',
    clockSpeed: 6,
    coreTotal: 4,
    precisionBoost: true
};

createIntel(corei5);
createAMD(ryzen3);