import { setIntUniform } from "./setUniform";
import { createTexture } from "./createTexture";


let camTexture: WebGLTexture | null = null;

export const getCamTexture = (gl: WebGL2RenderingContext, program: WebGLProgram, video: HTMLVideoElement) => {
    if (!camTexture) {
        initCamTexture(gl, program, video);
    }

    if (!camTexture) {
        throw new Error("can't init cam texture");
    }

    return camTexture;
};

const initCamTexture = (gl: WebGL2RenderingContext, program: WebGLProgram, video: HTMLVideoElement) => {
    camTexture = createTexture(gl);
    setIntUniform(gl, program, "camTexture", 0);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
};