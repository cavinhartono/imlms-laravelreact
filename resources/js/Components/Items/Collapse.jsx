export default function Collapse({ icon, label, links }) {
    return (
        <li>
            <ul className="opacity-0 hidden transition">
                <List icon={icon} label={label} />
                links.forEach(link =>
                {<List label={link.label} href={link.href} />}
                );
            </ul>
        </li>
    );
}
