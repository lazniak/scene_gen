from .scene_gen_node import SceneGenNode

NODE_CLASS_MAPPINGS = {
    'SceneGenNode': SceneGenNode
}

NODE_DISPLAY_NAME_MAPPINGS = {
    'SceneGenNode': 'Scene Gen (Gemini)'
}

__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS']
