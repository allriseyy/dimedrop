import React from "react";
import FollowMeCard from "../components/FollowMeCard";
import styled from 'styled-components';

const FollowMeCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;


const ContactUs = () => {
    return (
        <FollowMeCardContainer>
            <FollowMeCard />
        </FollowMeCardContainer>
    );
};

export default ContactUs;