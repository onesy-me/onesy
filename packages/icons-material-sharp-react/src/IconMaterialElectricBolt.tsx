import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricBolt = (props: IIcon) => {

  return (
    <Icon
      name='ElectricBolt'

      short_name='ElectricBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-80 160-300-320-40 480-460h80L520-580l320 40L360-80h-80Zm222-247 161-154-269-34 63-117-160 154 268 33-63 118Zm-22-153Z"/>
    </Icon>
  );
};

IconMaterialElectricBolt.displayName = 'OnesyIconMaterialElectricBolt';

export default IconMaterialElectricBolt;
