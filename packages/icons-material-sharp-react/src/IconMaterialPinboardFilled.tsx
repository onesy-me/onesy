import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinboardFilled = (props: IIcon) => {

  return (
    <Icon
      name='PinboardFilled'

      short_name='Pinboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m260-80-40-40v-160H80v-80l60-106v-94H80v-80h360v80h-60v94l60 106v80H300v160l-40 40Zm220-80v-80h320v-480H80v-80h800v640H480Z"/>
    </Icon>
  );
};

IconMaterialPinboardFilled.displayName = 'OnesyIconMaterialPinboardFilled';

export default IconMaterialPinboardFilled;
