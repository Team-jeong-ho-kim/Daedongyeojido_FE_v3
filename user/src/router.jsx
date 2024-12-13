import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { SeeAll } from "./pages/SeeAllPage";
import { ClubMain } from "./pages/ClubMain";
import { MyPage } from "./pages/MyPage";

export const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/seeall" element={<SeeAll />} />
          <Route path="/club" element={<ClubMain />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

const Container = styled.body`
  font-family: "Pretendard";
`;