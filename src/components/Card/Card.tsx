import './Card.css'

interface Props {
    children: React.ReactNode
    imgSrc: string
}

export const Card = ({ children, imgSrc }: Props) => {
    return (
        <div className="card">
            <img src={imgSrc} />
            {children}
        </div>
    );
};