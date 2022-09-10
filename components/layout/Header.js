import Logo from 'assets/logo.svg';
import classNames from 'classnames';
import HamburgerButton from 'components/common/HamburgerButton';
import Icon from 'components/common/Icon';
import Link from 'components/common/Link';
import UpdateNotice from 'components/common/UpdateNotice';
import LanguageButton from 'components/settings/LanguageButton';
import ThemeButton from 'components/settings/ThemeButton';
import UserButton from 'components/settings/UserButton';
import useUser from 'hooks/useUser';
import { HOMEPAGE_URL } from 'lib/constants';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import styles from './Header.module.css';
import useConfig from '/hooks/useConfig';

export default function Header() {
  const { user } = useUser();
  const { pathname } = useRouter();
  const { updatesDisabled } = useConfig();
  const isSharePage = pathname.includes('/share/');
  const allowUpdate = user?.is_admin && !updatesDisabled && !isSharePage;

  return (
    <>
      {allowUpdate && <UpdateNotice />}
      <header className={classNames(styles.header, 'row')}>
        <div className={styles.title}>
          <Icon icon={<Logo />} size="large" className={styles.logo} />
          <Link href={isSharePage ? HOMEPAGE_URL : '/'}>Viabay Analytics</Link>
        </div>
        <HamburgerButton />
        {user && (
          <div className={styles.links}>
            <Link href="/dashboard">
              <FormattedMessage id="label.dashboard" defaultMessage="Dashboard" />
            </Link>
            <Link href="/realtime">
              <FormattedMessage id="label.realtime" defaultMessage="Realtime" />
            </Link>
            <Link href="/settings">
              <FormattedMessage id="label.settings" defaultMessage="Settings" />
            </Link>
          </div>
        )}
        <div className={styles.buttons}>
          <ThemeButton />
          <LanguageButton menuAlign="right" />
          {user && <UserButton />}
        </div>
      </header>
    </>
  );
}
