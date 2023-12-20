import './Button.css'

interface Props {
    children: React.ReactNode
}

export const Button = ({ children }: Props) => {
    return (
        <button className="button">{children}</button>
    );
};