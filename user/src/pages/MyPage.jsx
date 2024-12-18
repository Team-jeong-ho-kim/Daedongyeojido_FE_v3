import styled from "styled-components";
import { useState } from "react";

import { Header } from "../components/Header";
import { Pagefooter } from "../components/PageFooter";
import { JiwonNaeYeok } from "../components/JiwonNaeYeok";

import profil from "../assets/기본프로필.svg";
import profilEdit from "../assets/profilEdit.svg";

export const MyPage = () => {
  const [student, setStudent] = useState({
    name: "최민수",
    club: "대동여지도",
    ClassNumber: "1314",
  });
  const [uploadImgUrl, setUploadImgUrl] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (file) => {
    const formData = new FormData();

    formData.append("name", student.name);
    formData.append("club", student.club);
    formData.append("ClassNumber", styled.ClassNumber);

    if (file) {
      formData.append("profilImage", file);
    }

    try {
      const response = await fetch("http://localhost:5173/file/image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("업로드 성공: ", result);
        alert("프로필 이미지와 데이터 저장 성공!");
      } else {
        console.error("업로드 실패: ", response.statusText);
        alert("업로드 실패...");
      }
    } catch (error) {
      console.error("Error: ", error);
      alert("서버와 연결 중 오류가 발생하였습니다.");
    }
  };

  const imageUpload = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const uploadFile = files[0];
      setFile(uploadFile);

      const reader = new FileReader();
      reader.readAsDataURL(uploadFile);
      reader.onloadend = () => {
        setUploadImgUrl(reader.result);
      };

      handleSubmit();
    }
  };

  return (
    <>
      <Header />
      <MyPageAll>
        <Left>
          <MyInfo>
            <HighAll>
              <Affiliation>
                <Name>{student.name}</Name>
                <InfoContainer>
                  <ClubAndClass>
                    동아리
                    <Club>{student.club}</Club>
                    학번
                    <ClassNumber>{student.ClassNumber}</ClassNumber>
                  </ClubAndClass>
                  <Profils>
                    <HiddenFileInput
                      type="file"
                      accept="image/*"
                      onChange={imageUpload}
                      id="upload-input"
                    />
                    <ProfilEdit
                      onClick={() =>
                        document.getElementById("upload-input").click()
                      }
                      src={profilEdit}
                      alt="Edit"
                    />
                    <ProfileImage src={uploadImgUrl || profil} alt="Profile" />
                  </Profils>
                </InfoContainer>
              </Affiliation>
            </HighAll>
            <MiddleAll>
              <Now></Now>
              <Support>지원내역</Support>
            </MiddleAll>
            <UnderAll>
              <LogoutBtn>로그아웃</LogoutBtn>
            </UnderAll>
          </MyInfo>
        </Left>
        <Right>
          <Jiwon>지원내역</Jiwon>
          <IdoJiwon>
            <JiwonNaeYeok />
            <JiwonNaeYeok />
          </IdoJiwon>
        </Right>
      </MyPageAll>
      <Pagefooter notMypage={false} />
    </>
  );
};

const HiddenFileInput = styled.input`
  display: none;
`;

const IdoJiwon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Jiwon = styled.h1`
  font-size: 30px;
  margin: 70px 0 0 70px;
`;

const LogoutBtn = styled.button`
  width: 100px;
  height: 33px;
  background-color: #52565d;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 13px;
  color: #ffffff;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #696d72;
  }
`;

const ProfilEdit = styled.img`
  position: absolute;
  margin-top: 60%;

  &:hover {
    cursor: pointer;
  }
`;
const Profils = styled.div`
  margin-top: -13%;
  position: relative;
  display: flex;
`;

const Now = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: #fe4650;
`;

const Support = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;

  @media (max-width: 768px) {
    max-width: 60px;
    max-height: 60px;
    margin-top: 0;
  }
`;

const ClubAndClass = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #4e555b;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
`;

const ClassNumber = styled.div`
  font-weight: 800;
`;

const Club = styled.div`
  font-weight: 800;
  margin-right: 5px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Name = styled.div`
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Affiliation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const UnderAll = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const MiddleAll = styled.div`
  width: 100%;
  border-bottom: 1px solid #eaecef;
  padding: 10% 5% 10% 5%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HighAll = styled.div`
  width: 100%;
  border-bottom: 1px solid #eaecef;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 10px;
`;

const MyInfo = styled.div`
  width: 350px;
  height: 240px;
  padding: 10px 10px 10px 10px;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 5%;
    padding: 20px;
  }
`;

const Right = styled.div`
  width: 70%;
`;

const Left = styled.div`
  width: 30%;
  height: 100vh;
  border-right: 2px solid #ddd;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-right: none;
  }
`;

const MyPageAll = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
`;
