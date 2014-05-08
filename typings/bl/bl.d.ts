// <reference path="../node/node.d.ts" />

declare module 'bl' {
	function bl(callback?: (err: Error, buffer: Buffer) => void): bl.BufferList;

	module  bl {
		interface BufferList extends NodeJS.ReadWriteStream {
			append(buffer: Buffer):void;
			get(index: number): number;
			slice(start?: number, end?: number): Buffer;
			copy(dest: Buffer, destStart?: number, srcStart?: number, srcEnd?: number): void;
			duplicate(): BufferList;
			consume(bytes?: number): void;
			toString(encoding?: string, start?: number, end?: number): string;
			length: number;

			readDoubleBE(offset: number, noAssert?: boolean): Buffer;
			readDoubleLE(offset: number, noAssert?: boolean): Buffer;
			readFloatBE(offset: number, noAssert?: boolean): Buffer;
			readFloatLE(offset: number, noAssert?: boolean): Buffer;
			readInt32BE(offset: number, noAssert?: boolean): Buffer;
			readInt32LE(offset: number, noAssert?: boolean): Buffer;
			readUInt32BE(offset: number, noAssert?: boolean): Buffer;
			readUInt32LE(offset: number, noAssert?: boolean): Buffer;
			readInt16BE(offset: number, noAssert?: boolean): Buffer;
			readInt16LE(offset: number, noAssert?: boolean): Buffer;
			readUInt16BE(offset: number, noAssert?: boolean): Buffer;
			readUInt16LE(offset: number, noAssert?: boolean): Buffer;
			readInt8(offset: number, noAssert?: boolean): Buffer;
			readUInt8(offset: number, noAssert?: boolean): Buffer;
		}
	}

	export = bl
}