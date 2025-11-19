import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicOffW100 = (props: IIcon) => {

  return (
    <Icon
      name='MicOffW100'

      short_name='MicOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m657-442-22-24q3-8 5.5-22.5T643-520h28q0 26-4 44.5T657-442ZM443-657Zm68 69-28-28v-144q0-17-11.5-28.5T443-800q-17 0-28.5 11.5T403-760v62l-28-28v-34q0-29 19.5-48.5T443-828q29 0 48.5 19.5T511-760v172Zm-82 442v-146q-91-7-152.5-72T215-520h28q0 83 58.5 141.5T443-320q46 0 85.5-19t67.5-52l20 20q-29 34-70 55t-89 24v146h-28Zm370-2L85-862l20-20 714 714-20 20Z"/>
    </Icon>
  );
};

IconMaterialMicOffW100.displayName = 'OnesyIconMaterialMicOffW100';

export default IconMaterialMicOffW100;
