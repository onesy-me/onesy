import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewQuiltFilled = (props: IIcon) => {

  return (
    <Icon
      name='ViewQuiltFilled'

      short_name='ViewQuilt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M373-500v-260h467v260H373Zm254 300v-260h213v260H627Zm-254 0v-260h214v260H373Zm-253 0v-560h213v560H120Z"/>
    </Icon>
  );
};

IconMaterialViewQuiltFilled.displayName = 'OnesyIconMaterialViewQuiltFilled';

export default IconMaterialViewQuiltFilled;
