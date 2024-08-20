import React, { Component } from "react";
import styled from "styled-components";
import Sticker from "../Sticker/Sticker";
import Choice from "../Choice/Choice";
import { nanoid } from "nanoid";

const StickersStyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;

  li {
    background-color: #0ecbec;
    border-radius: 15px;
  }
`;

class StickersList extends Component {
  state = {
    stickers: this.props.stickers,
    stickerName: "",
  };

  showSticker = (evt) => {
    if (evt.target.nodeName !== "IMG") return;
    this.setState({
      stickerName: evt.target.parentNode.getAttribute("data-name"),
    });
  };

  render() {
    const { stickers, stickerName } = this.state;
    return (
      <>
        <StickersStyledList onClick={(evt) => this.showSticker(evt)}>
          {stickers.map((sticker) => (
            <Sticker
              stickerUrl={sticker.img}
              stickerLabel={sticker.label}
              key={nanoid()}
            />
          ))}
        </StickersStyledList>
        <Choice imgLabel={stickerName} />
      </>
    );
  }
}

export default StickersList;
