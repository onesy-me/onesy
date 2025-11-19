import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilePngFilled = (props: IIcon) => {

  return (
    <Icon
      name='FilePngFilled'

      short_name='FilePng'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-500v-40h40v40h-40Zm380 140h80l40-40v-80h-60v60h-40v-120h100v-60H640l-40 40v160l40 40Zm-440 0h60v-80h70l30-30v-100l-30-30H200v240Zm200 0h60v-96l40 96h60v-240h-60v94l-40-94h-60v240ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialFilePngFilled.displayName = 'OnesyIconMaterialFilePngFilled';

export default IconMaterialFilePngFilled;
