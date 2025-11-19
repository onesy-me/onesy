import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrushFilled = (props: IIcon) => {

  return (
    <Icon
      name='BrushFilled'

      short_name='Brush'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-45 0-89-22t-71-58q26 0 53-20.5t27-59.5q0-50 35-85t85-35q50 0 85 35t35 85q0 66-47 113t-113 47Zm230-240L360-470l386-386 110 110-386 386Z"/>
    </Icon>
  );
};

IconMaterialBrushFilled.displayName = 'OnesyIconMaterialBrushFilled';

export default IconMaterialBrushFilled;
