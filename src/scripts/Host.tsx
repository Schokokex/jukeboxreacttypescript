import React from "react";
import SmartPlayer from "./SmartPlayer";
import PlayList from "./PlayList";
import ILobby from "./ILobby";
import {RouteComponentProps} from "react-router";

export default class Host extends React.Component<RouteComponentProps & ILobby> {
    constructor(props: any) {
        super(props);
    }

    playNext = () => {
        if (true) {
            let buf = this.state.player;
            this.state.player = this.state.next;
            this.state.next = this.state.player;
        }
    };
    private player1 = <SmartPlayer autoplay={true} player={SmartPlayer.YOUTUBE} url={"PCicKydX5GE"} onEnd={this.playNext}/>;
    private player2 = <SmartPlayer onEnd={this.playNext} player={SmartPlayer.YOUTUBE} url={"PCicKydX5GE"}/>;

    state = {
        player: this.player1,
        next: this.player2
    };

    render() {
        return (
            <>
                <h1>hi</h1>
                {this.state.player}
                <PlayList hash={this.props.hash}/>
            </>
        );
    }
}