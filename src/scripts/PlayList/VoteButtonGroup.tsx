import React from "react";
import {ButtonGroup} from "react-bootstrap";
import VoteButton from "./VoteButton";
import ISong from "../ISong";
import ILobby from "../ILobby";
import ILobbyControls from "../Player/ILobbyControls";

export default class VoteButtonGroup extends React.Component<{ song: ISong; lobby: ILobby;} & ILobbyControls> {
    voteUp = () => this.props.voteSong(this.props.song,true);
    voteDown = () => this.props.voteSong(this.props.song,true);



    render() {
        return (
            <ButtonGroup size="lg" vertical style={{margin: "0.5em"}} >
                <VoteButton onClick={this.voteUp} voted={this.props.song.voted_for === "UP"}
                            plus={true}>{this.props.song.vote_up}</VoteButton>
                <VoteButton onClick={this.voteDown} voted={this.props.song.voted_for === "DOWN"}
                            plus={false}>{this.props.song.vote_down}</VoteButton>
            </ButtonGroup>
        );
    }
}