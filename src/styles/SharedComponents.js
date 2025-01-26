import styled from 'styled-components';

// Black CTA Button
export const BlackButton = styled.button`
background-color: var(--jet); /* Black background */
color: var(--white); /* White text */
padding: 8px 16px;
border-radius: 20px; /* Fully rounded corners for tag-like style */
font-size: 1rem;
cursor: pointer;
display: inline-block;
transition: all 0.3s ease-in-out;


&:hover {
    background-color: var(--white);
    color: var(--jet);
    border: 2px solid var(--jet);
}
`;

// White CTA Button
export const WhiteButton = styled.button`
background-color: var(--white); /* White background */
color: var(--jet); /* Black text */
padding: 8px 16px;
border-radius: 20px; /* Fully rounded corners for tag-like style */
font-size: 1rem;
cursor: pointer;
display: inline-block;
transition: all 0.3s ease-in-out;

&:hover {
    background-color: var(--jet);
    color: var(--white);
    border: 2px solid var(--black);

}
`;