const supportFiles = [{ type: 'image/png', ext: 'png' }, { type: 'image/jpeg', ext: 'jpeg' }, { type: 'image/gif', ext: 'gif' }, { type: 'image/webp', ext: 'webp' }, { type: 'image/jpg', ext: 'jpg' }, { type: 'image/x-icon', ext: 'ico' }, { type: 'application/x-ico', ext: 'ico' }, { type: 'image/vnd.microsoft.icon', ext: 'ico' }]
const supportFile = 'image/png,image/jpeg,image/gif,image/webp,image/jpg,image/x-icon,application/x-ico,image/vnd.microsoft.icon'

// 字符串编码
export function randomString(value: number) {
    let baseStr = 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9KkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    const chars = baseStr.split('');
    let maxPos = baseStr.length;
    const uuid = [];
    let q = value;
    for (; q > 0;) {
        let mod = q % maxPos;
        q = (q - mod) / maxPos;
        uuid.push(chars[mod]);
    }
    return uuid.join('');
}

// 解析range
export function parseRange(encoded: string | null): undefined | { offset: number, end: number, length: number } {
    if (encoded === null) {
        return
    }
    const parts = encoded.split("bytes=")[1]?.split("-") ?? []
    if (parts.length !== 2) {
        throw new Error('Not supported to skip specifying the beginning/ending byte at this time')
    }
    return {
        offset: Number(parts[0]),
        end: Number(parts[1]),
        length: Number(parts[1]) + 1 - Number(parts[0]),
    }
}

// 检查文件类是否支持
export function checkFileType(val: string): boolean {
    return supportFile.indexOf(val) > -1
}

// 获取文件名
export async function getFilePath(val: string, filename: string, time: number): Promise<string> {
    const types = supportFiles.filter(it => it.type === val)
    if (!types || types.length < 1) {
        return val
    }
    const rand = Math.floor(Math.random() * 100000)
    const fileName = randomString(time + rand).concat(`.${types[0].ext}`)
    
    let date = new Date()
    const year = date.getFullYear() //获取完整的年份(4位)
    let month = date.getMonth() + 1 //获取当前月份(0-11,0代表1月)
    if (month < 10) {
        month = `0${month}`;
    }
    return `${year}/${month}/${filename}`

}
