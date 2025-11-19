import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoSimFilled = (props: IIcon) => {

  return (
    <Icon
      name='NoSimFilled'

      short_name='NoSim'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-273 296-776l104-104h400v607Zm20 245L608-240l57-56 135 135v81H160v-560l24-24L28-820l57-56L876-85l-56 57Z"/>
    </Icon>
  );
};

IconMaterialNoSimFilled.displayName = 'OnesyIconMaterialNoSimFilled';

export default IconMaterialNoSimFilled;
