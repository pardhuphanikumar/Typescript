export class StringBuilder {
    constructor(protected value: string = "") {
    }
    public append(text: string): this {
        this.value += text;
        return this;
    }
    public appendLine(line: string): this {
        this.value += line + '\n';
        return this;
    }
    public result(): string {
        return this.value;
    }
}
const builder = new StringBuilder;
const res = builder.appendLine('Header').append('Label:').appendLine('i am label').result();
console.log(res);
//output is
// Header
// Label:i am label

///scenorio -2
export class ObjectStringBulder extends StringBuilder {
    constructor(value: string = "") {
        super(value)
    }
    public appendObject(obj: any): this {
        this.value = JSON.stringify(obj)
        return this;
    }
}
const builder1 = new ObjectStringBulder;
const res1 =
    builder1
        .appendObject({ a: 1 })
        .appendLine('Header')
        .append('Label:')
        .appendObject({ b: 1 })
        .appendLine('i am label')
        .result();
console.log(res1);
