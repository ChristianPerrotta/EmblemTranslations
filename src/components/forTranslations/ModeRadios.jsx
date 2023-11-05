export function ModeRadios(props) {

    function isRadioSelected(value) {
        return (props.selectedRadioBtn === value);
    }

    function handleRadioClick(e) {
        props.setMode(e.currentTarget.value)
    }

    return (
        <div className="container mt-4">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="mode" value="leftRight"
                checked={isRadioSelected('leftRight')} onChange={handleRadioClick} /> Left-Right
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="mode" value="topBottom"
                 checked={isRadioSelected('topBottom')} onChange={handleRadioClick} /> Top-Bottom
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="mode" value="intercalated"
                 checked={isRadioSelected('intercalated')} onChange={handleRadioClick} /> Intercalated
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="mode" value="english"
                 checked={isRadioSelected('english')} onChange={handleRadioClick} /> English Only
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="mode" value="japanese"
                 checked={isRadioSelected('japanese')} onChange={handleRadioClick} /> Japanese Only
            </div>
        </div>
    )
}