import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCozyFilled = (props: IIcon) => {

  return (
    <Icon
      name='ViewCozyFilled'

      short_name='ViewCozy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-540q-33 0-56.5-23.5T120-620v-140q0-33 23.5-56.5T200-840h140q33 0 56.5 23.5T420-760v140q0 33-23.5 56.5T340-540H200Zm0 420q-33 0-56.5-23.5T120-200v-140q0-33 23.5-56.5T200-420h140q33 0 56.5 23.5T420-340v140q0 33-23.5 56.5T340-120H200Zm420-420q-33 0-56.5-23.5T540-620v-140q0-33 23.5-56.5T620-840h140q33 0 56.5 23.5T840-760v140q0 33-23.5 56.5T760-540H620Zm0 420q-33 0-56.5-23.5T540-200v-140q0-33 23.5-56.5T620-420h140q33 0 56.5 23.5T840-340v140q0 33-23.5 56.5T760-120H620Z"/>
    </Icon>
  );
};

IconMaterialViewCozyFilled.displayName = 'OnesyIconMaterialViewCozyFilled';

export default IconMaterialViewCozyFilled;
