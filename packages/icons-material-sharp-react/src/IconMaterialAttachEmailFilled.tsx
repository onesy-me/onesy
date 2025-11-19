import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachEmailFilled = (props: IIcon) => {

  return (
    <Icon
      name='AttachEmailFilled'

      short_name='AttachEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-80q-66 0-113-47t-47-113v-180q0-42 29-71t71-29q42 0 71 29t29 71v180h-80v-180q0-8-6-14t-14-6q-8 0-14 6t-6 14v180q0 33 23.5 56.5T760-160q33 0 56.5-23.5T840-240v-160h80v160q0 66-47 113T760-80ZM40-240v-640h800v320H700q-58 0-99 41t-41 99v180H40Zm400-280 320-200v-80L440-600 120-800v80l320 200Z"/>
    </Icon>
  );
};

IconMaterialAttachEmailFilled.displayName = 'OnesyIconMaterialAttachEmailFilled';

export default IconMaterialAttachEmailFilled;
