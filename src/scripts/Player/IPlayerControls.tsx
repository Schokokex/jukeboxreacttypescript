import ISong from "../ISong";

export default interface IPlayerControls {
    addSong: () => any;
    removeSong: (song: ISong) => any;
}