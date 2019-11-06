import React from "react";
import PlayListItem from "./PlayListItem";
import ISong from "../ISong";
import ILobby from "../ILobby";
import IPlaylist from "./IPlaylist";
import IPlayerControls from "../Player/IPlayerControls";

export default class PlayList extends React.Component<{ lobby: ILobby; playlist: IPlaylist } & IPlayerControls> {
    constructor(props: any) {
        super(props);
        console.log("con playlist",this.props);
    }

    render() {
        const {playlist} = this.props;
        console.log("playlist", playlist);
        const items = (playlist) && (playlist).map((song: ISong, i: number) => {
            return <PlayListItem {...this.props} song={song} key={i} votable={true}/>
        });
        return (
            <>
                {items}
            </>
        );
    }
}