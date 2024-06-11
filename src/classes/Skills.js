import other from './Other.js';

class Skills {
    skillCooldown = (cooldownms, selector, setDisabled) => {
        setDisabled(true);

        const start = new Date().getTime();

        const id = other.interval(1000, () =>
            this.setTime(
                Math.round(100 - ((new Date().getTime() - start) / cooldownms) * 100),
                selector
            )
        );

        other.delay(cooldownms).then(() => {
            setDisabled(false);
            clearInterval(id);
        });
    };

    useTimeSkill = (setSkill, skill, selector, setDisabled) => {
        setSkill(true);

        const start = new Date().getTime();
        const actionms = other.toms(skill.action);

        const id = other.interval(1000, () =>
            this.setTime(Math.round(((new Date().getTime() - start) / actionms) * 100), selector)
        );

        other.delay(actionms).then(() => {
            setSkill(false);
            clearInterval(id);

            const cooldownms = other.toms(skill.cooldown);
            this.skillCooldown(cooldownms, selector, setDisabled);
        });
    };

    setTime = (percent, selector) => {
        document.querySelector(selector).style.setProperty('--value', `${percent}%`);
    };
}

const skills = new Skills();

export default skills;
