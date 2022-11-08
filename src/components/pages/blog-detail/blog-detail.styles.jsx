import styled from "styled-components";

export const BlogDetailStyles = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10rem;
    gap: 2rem;

    a {
        text-decoration: none;
        color: var(--yellow)
    }

    p {
        line-height: 2rem;
    }

    pre {
        background: var(--bg-primary);
        color: whitesmoke;
        margin-top: 1rem;
        padding: 0.5rem;
        border-radius: 5px;
        max-height: 60vh;
        overflow-y: auto;
    }

    .highlight__panel {
        visibility: hidden;
    }

    strong {
        line-height: 5rem;
        font-size: 1.5rem;
    }

    .tags {
        display: flex;
        gap: 1rem;
    }

    @media only screen and (max-width: 760px){
        padding: 0 1rem;
    }
`