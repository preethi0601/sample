import { useTranslation} from 'react-i18next';
export default function Signup() {
    const { t } = useTranslation();
    return (
        <div>
            <h3>{t('main.signup')}</h3>
            <form>
                <label>{t('main.name')} <input type="text"/> </label>
                <label>{t('main.password')} <input type="password"/> </label>
                <label>{t('main.re-enter-password')} <input type="password"/> </label>
                <button type="submit">{t('main.submit')}</button>
            </form>
        </div>
    )
}