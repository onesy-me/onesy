import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanTool = (props: IIcon) => {

  return (
    <Icon
      name='PanTool'

      short_name='PanTool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M339-40 48-465l69-66 163 114v-423h80v577L212-367l169 247h379v-680h80v760H339Zm101-440v-440h80v440h-80Zm160 0v-400h80v400h-80Zm-80 180Z"/>
    </Icon>
  );
};

IconMaterialPanTool.displayName = 'OnesyIconMaterialPanTool';

export default IconMaterialPanTool;
