import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashlightOnFilled = (props: IIcon) => {

  return (
    <Icon
      name='FlashlightOnFilled'

      short_name='FlashlightOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-760v-40q0-33 23.5-56.5T320-880h320q33 0 56.5 23.5T720-800v40H240Zm240 420q25 0 42.5-17.5T540-400q0-25-17.5-42.5T480-460q-25 0-42.5 17.5T420-400q0 25 17.5 42.5T480-340ZM320-160v-360l-67-100q-7-10-10-21t-3-23v-16h480v16q0 12-3 23t-10 21l-67 100v360q0 33-23.5 56.5T560-80H400q-33 0-56.5-23.5T320-160Z"/>
    </Icon>
  );
};

IconMaterialFlashlightOnFilled.displayName = 'OnesyIconMaterialFlashlightOnFilled';

export default IconMaterialFlashlightOnFilled;
