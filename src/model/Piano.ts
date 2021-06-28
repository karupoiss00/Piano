type Key = {
    keyName: string;
    keyType: "CLEARED" | "ALTERED";
    keyBind: string;
    sampleName: string;
}

export type Octave = {
    keys: Array<Key>
}

export const Piano: Octave = {
    keys:
        [
            {
                keyName: "C",
                keyBind: "Z",
                keyType: "CLEARED",
                sampleName: "c1.mp3"
            },
            {
                keyName: "CSharp",
                keyBind: "S",
                keyType: "ALTERED",
                sampleName: "C1D.mp3"
            },
            {
                keyName: "D",
                keyBind: "X",
                keyType: "CLEARED",
                sampleName: "d1.mp3"
            },
            {
                keyName: "DSharp",
                keyBind: "D",
                keyType: "ALTERED",
                sampleName: "D1D.mp3"
            },
            {
                keyName: "E",
                keyBind: "C",
                keyType: "CLEARED",
                sampleName: "e1.mp3"
            },
            {
                keyName: "F",
                keyBind: "V",
                keyType: "CLEARED",
                sampleName: "f1.mp3"
            },
            {
                keyName: "FSharp",
                keyBind: "G",
                keyType: "ALTERED",
                sampleName: "F1D.mp3"
            },
            {
                keyName: "G",
                keyBind: "B",
                keyType: "CLEARED",
                sampleName: "g1.mp3"
            },
            {
                keyName: "GSharp",
                keyBind: "H",
                keyType: "ALTERED",
                sampleName: "G1D.mp3"
            },
            {
                keyName: "A",
                keyBind: "N",
                keyType: "CLEARED",
                sampleName: "a1.mp3"
            },
            {
                keyName: "ASharp",
                keyBind: "J",
                keyType: "ALTERED",
                sampleName: "A1D.mp3"
            },
            {
                keyName: "B",
                keyBind: "M",
                keyType: "CLEARED",
                sampleName: "b1.mp3"
            }
        ]
};