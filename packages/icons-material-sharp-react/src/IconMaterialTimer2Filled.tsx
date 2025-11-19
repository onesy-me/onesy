import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer2Filled = (props: IIcon) => {

  return (
    <Icon
      name='Timer2Filled'

      short_name='Timer2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200v-340h240v-100H320v-120h360v340H440v100h240v120H320Z"/>
    </Icon>
  );
};

IconMaterialTimer2Filled.displayName = 'OnesyIconMaterialTimer2Filled';

export default IconMaterialTimer2Filled;
