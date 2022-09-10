import classNames from 'classnames';
import Link from 'components/common/Link';
import { MAINPAGE_URL } from 'lib/constants';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { FormattedMessage } from 'react-intl';
import styles from './Footer.module.css';

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <footer className={classNames(styles.footer, 'row')}>
      <div className="col-12 col-md-4" />
      <div className="col-12 col-md-4">
        <FormattedMessage
          id="message.powered-by"
          defaultMessage="Powered by {name}"
          values={{
            name: (
              <Link href={MAINPAGE_URL}>
                <b>Viabay Analytics</b>
              </Link>
            ),
          }}
        />
      </div>

      {!pathname.includes('/share/') && <Script src={`/telemetry.js`} />}
    </footer>
  );
}
