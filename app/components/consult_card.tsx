import './consult_card.scss'

export const ConsultCard = () => {
    return (
        <div className="card-content">
            <p className="card-description">
                для <span className="highlight">тренеров</span> /
                <span className="highlight">спортсменов</span> /
                <span className="highlight">родителей</span>,
            </p>
            <p className="card-description">
                чтобы определить цели, найти внутренние ресурсы и разработать план действий для их достижения.
            </p>

            <div className="divider"></div>

            <div className="card-footer">
                <div className="benefit-item">
                    <div className="benefit-title">Формат</div>
                    <div className="benefit-value">1 на 1</div>
                </div>
                <div className="benefit-item">
                    <div className="benefit-title">Длительность</div>
                    <div className="benefit-value">60 мин</div>
                </div>
                <div className="benefit-item">
                    <div className="benefit-title">Онлайн</div>
                    <div className="benefit-value">✓</div>
                </div>
            </div>
        </div>
    );
}