import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotTouch = (props: IIcon) => {

  return (
    <Icon
      name='DoNotTouch'

      short_name='DoNotTouch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m840-234-80-80v-486h80v566ZM360-714l-80-80v-46h80v126Zm160 160-80-80v-286h80v366Zm160 81h-80v-407h80v407ZM381-120h346L360-487v224L212-367l169 247Zm-42 80L48-465l69-66 163 114v-150L27-820l57-57L896-65 839-8l-32-32H339Zm261-433Zm-56 169Z"/>
    </Icon>
  );
};

IconMaterialDoNotTouch.displayName = 'OnesyIconMaterialDoNotTouch';

export default IconMaterialDoNotTouch;
