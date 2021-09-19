import { bool } from 'prop-types';

import classes from './Loader.module.scss';

const Loader = ({ loading }) => {
  if (!loading) {
    return <></>;
  }
  return (
    <div className={classes.backdrop}>
      <div className={classes.ldsroller}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

Loader.propTypes = {
  loading: bool.isRequired,
};

export default Loader;
