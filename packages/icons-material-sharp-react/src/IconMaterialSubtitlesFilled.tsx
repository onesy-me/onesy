import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubtitlesFilled = (props: IIcon) => {

  return (
    <Icon
      name='SubtitlesFilled'

      short_name='Subtitles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm160-160h320v-80H240v80Zm400 0h80v-80h-80v80ZM240-480h80v-80h-80v80Zm160 0h320v-80H400v80Z"/>
    </Icon>
  );
};

IconMaterialSubtitlesFilled.displayName = 'OnesyIconMaterialSubtitlesFilled';

export default IconMaterialSubtitlesFilled;
