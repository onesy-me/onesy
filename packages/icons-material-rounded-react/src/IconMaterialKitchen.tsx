import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKitchen = (props: IIcon) => {

  return (
    <Icon
      name='Kitchen'

      short_name='Kitchen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-640q-17 0-28.5-11.5T320-680v-40q0-17 11.5-28.5T360-760q17 0 28.5 11.5T400-720v40q0 17-11.5 28.5T360-640Zm0 360q-17 0-28.5-11.5T320-320v-120q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440v120q0 17-11.5 28.5T360-280ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-360H240v360Zm0-440h480v-200H240v200Z"/>
    </Icon>
  );
};

IconMaterialKitchen.displayName = 'OnesyIconMaterialKitchen';

export default IconMaterialKitchen;
