import styled from "styled-components";

const StickerStyledItem = styled.li`
  width: 256px;
  height: 256px;
`;

const Sticker = ({ stickerUrl, stickerLabel }) => (
  <StickerStyledItem data-name={stickerLabel}>
    <img src={stickerUrl} alt={stickerLabel} />
  </StickerStyledItem>
);

export default Sticker;
