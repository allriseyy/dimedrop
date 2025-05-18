import React from "react";
import FollowMeCard from "../components/FollowMeButton";
import styled from 'styled-components';

const FollowMeCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const ContactUs = () => {
    return (
        <FollowMeCardContainer>
            <FollowMeCard />
        </FollowMeCardContainer>
    );
};

export default ContactUs;